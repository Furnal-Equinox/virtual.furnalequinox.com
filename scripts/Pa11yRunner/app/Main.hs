{-# LANGUAGE OverloadedStrings #-}

{-
`LANGUAGE OverloadedStrings`
allows strings to be contextually inferred as types other than Haskell's basic String type.
In this script, I use Data.Text's string implementation instead because it uses less space.
-}

{-
Notes for people unfamiliar with Haskell:

<> is string concatenation. There is a ++ concatenation operator intended for lists,
but <> is a more general form of the same operator. In fact, ++ is implemented as <>!
It works the same way as the + in "Hello, " + "World!" in C-like languages.

For the arrows below, think of it like this:
(<|) :: (a -> b) -> a -> b

:: - "has type..."
(a -> b) - "a function that takes a value of type a and returns a value of type b"
(-> a) - "a value of type a"
(-> b) - "and returns a value of type b"

In short, you may think of everything before the last arrow as being like a parameter list.
-}

module Main where

import           Data.Text      (Text)
import qualified Data.Text as T
import           Turtle         (   mkdir
                                  , rmtree
                                  , testdir
                                  , fromText
                                  , shell
                                  , Text
                                  , Alternative(empty)
                                  , MonadIO
                                  , ExitCode(..) )

-- | Synonym for the $ backwards function application operator
infixr 0 <|
(<|) :: (a -> b) -> a -> b
(<|) f = f
{-# INLINE (<|) #-}

-- | Synonym for the & forwards function application operator
-- Basically OCaml's |>. I like the triangle operators because
-- it is easier to read and more clearly shows the direction of data.
infixl 1 |>
(|>) :: a -> (a -> b) -> b
(|>) x f = f x
{-# INLINE (|>) #-}

-- | Type synonym for URLs, just to make the code clearer.
type Url = Text

-- | Type synonym for report names.
type ReportName = Text

-- | The URL of the root website to check. Should match the form https://subdomain.domain.com/
website :: Url
website = ""

-- | Paths to check, paired with the name of the report for that path.
pathsToCheck :: [(Url, ReportName)]
pathsToCheck =
  [
      ( "../../public/event/index.html",                               "landing-page"                    )
    , ( "../../public/event/con-store/index.html",                     "con-store-page"                  )
    , ( "../../public/event/dealers/index.html",                       "dealers-index-page"              )
    , ( "../../public/event/dealers/beast-within/index.html",          "beast-within-dealer-page"        )
    , ( "../../public/event/dealers/chez-rhox/index.html",             "chex-rhox-dealer-page"           )
    , ( "../../public/event/dealers/dragonstorm-studios/index.html",   "dragonstorm-studios-dealer-page" )
    , ( "../../public/event/discord-vr/index.html",                    "discord-vr-page"                 )
    , ( "../../public/event/djs/index.html",                           "djs-page"                        )
    , ( "../../public/event/gallery/index.html",                       "gallery-index-page"              )
    , ( "../../public/event/how-to/index.html",                        "how-to-page"                     )
    , ( "../../public/event/livestream/index.html",                    "livestream-page"                 )
    , ( "../../public/event/news/index.html",                          "news-index-page"                 )
    , ( "../../public/event/news/2020-12-09-welcome/index.html",       "2020-12-09-welcome-page"         )
    , ( "../../public/help/index.html",                                "help-page"                       )
    , ( "../../public/info/index.html",                                "info-page"                       )
    , ( "../../public/index.html",                                     "login-page"                      )
    , ( "../../public/404/index.html",                                 "404-page"                        )
  ]

-- | Command-line settings for pa11y.
pa11ySettings :: Text
pa11ySettings = "--standard WCAG2AA --reporter cli --level error --include-warnings"

-- | The directory to save the reports to. pa11y defaults to the current working directory.
outDir :: Text
outDir = "../../pa11y-reports/"

-- | Runs pa11y with `pa11ySettings` over the list of paths and saves the reports to `outDir`.
runPa11y :: MonadIO io => Url -> Url -> ReportName -> io ExitCode
runPa11y url page reportName = 
  shell (pa11y <> urlToCheck <> outputReport) empty
  where
    pa11y = "pa11y " <> pa11ySettings <> " " -- Setting pa11y up
    urlToCheck = "'" <> url <> page <> "' " -- URL to check
    outputReport = "> " <> outDir <> reportName <> ".report.txt" -- file to pipe the report into

-- | Is this particular ExitCode an ExitSuccess?
isExitSuccess :: ExitCode -> Bool
isExitSuccess ExitSuccess = True
isExitSuccess (ExitFailure _) = False

-- | Is this particular ExitCode an ExitFailure?
isExitFailure :: ExitCode -> Bool
isExitFailure ExitSuccess = False
isExitFailure (ExitFailure _) = True

-- | Count the number of ExitFailures in a list of ExitCodes.
countFailures :: [ExitCode] -> Int
countFailures codes =
  codes
  |> filter isExitFailure
  |> length

-- | Count the number of ExitSuccesses in a list of ExitCodes.
countSuccesses :: [ExitCode] -> Int
countSuccesses codes =
  codes
  |> filter isExitSuccess
  |> length

-- | The main function.
main :: IO ()
main = do

  putStrLn <| "Hello! I'll replace the output directory if it exists now."

  -- Make the output directory if it does not already exist.
  let pa11yDir = fromText outDir
  
  dirExists <- testdir <| pa11yDir

  if dirExists
    then do 
      rmtree <| pa11yDir
      mkdir <| pa11yDir
    else do 
      mkdir <| pa11yDir

  putStrLn <| "Okay! Next, I'll run pa11y on the pages you chose."

  -- Run pa11y over the paths to check, saving the reports to the directory
  -- that this program just made.
  -- Additionally, save the error codes that each pa11y instance returns. 
  results <- traverse (uncurry (runPa11y website)) pathsToCheck

  putStrLn <| "Done! Let's see the results!"

  -- How many instances of pa11y reported errors?
  let numErrored = countFailures results
  
  -- How many instances of pa11y did NOT report any errors?
  let numWentFine = countSuccesses results

  if numErrored > 0
    then do
      putStrLn <|
        "Ran pa11y " <> (show <| length results) <>
        " times with the following settings: " <> T.unpack pa11ySettings
      
      putStrLn <|
        show numErrored <> " instance(s) of pa11y reported errors. Check the reports for details."
      
      if numWentFine > 0
        then do
          putStrLn <|
            "However, the other " <> show numWentFine <>
            " instance(s) of pa11y did not report any errors. "
        
        else do
          putStrLn <| "Oh no! It looks like all of the input pages have errors :-("
    
    else do
      putStrLn <| 
        "None of the pa11y instances reported any errors. Everything looks good! " <>
        "However, there may be warnings, so please check the reports to be sure!"
