#!/usr/bin/env stack
{- stack script
 --resolver lts-16.23
 --package "text turtle"
-}
{-# LANGUAGE LambdaCase        #-}
{-# LANGUAGE OverloadedStrings #-}

module Main where

import           Data.Text (Text)
import qualified Data.Text as T
import           Turtle

type Url = Text

type ReportName = Text

website :: Url
website = "https://virtual.furnalequinox.com/"

pathsToCheck :: [(Url, ReportName)]
pathsToCheck =
  [
      ("index.html", "home-page")
    , ("404/index.html", "404-page")
    , ("adult/index.html", "adult-page")
    , ("dealers/index.html", "dealers-index-page")
    , ("dealers/beast-within.html", "beast-within-dealer-page")
    , ("gallery/index.html", "gallery-index-page")
    , ("login/index.html", "login-page")
    , ("news/index.html", "news-index-page")
    , ("news/2020-12-09-welcome/index.html", "2020-12-09-welcome-page")
    , ("shop/index.html", "shop-page")
  ]

pa11ySettings :: Text
pa11ySettings = "--standard WCAG2AA --reporter cli --level error --include-warnings --include-notices"

outDir :: Text
outDir = "./pa11y-reports/"

runPa11y :: MonadIO io => Url -> Url -> ReportName -> io ExitCode
runPa11y url page reportName  = shell (
    "pa11y " <> pa11ySettings <> " " -- Setting pa11y up
      <> "'" <> url <> page <> "'" -- URL to check
      <> " > " <> outDir <> reportName <> ".report.txt" -- file to pipe the report into
  ) empty

countFailures :: [ExitCode] -> Int
countFailures codes =
  length
  $ filter
    (\case
      ExitSuccess -> False
      ExitFailure _ -> True
    )
  $ codes

countSuccesses :: [ExitCode] -> Int
countSuccesses codes =
  length
  $ filter
    (\case
      ExitSuccess -> True
      ExitFailure _ -> False
    )
  $ codes

main :: IO ()
main = do
  mkdir $ fromText outDir

  results <- traverse (uncurry (runPa11y website)) pathsToCheck

  let numErrored = countFailures results

  let numWentFine = countSuccesses results

  if numErrored > 0
    then do
      print $
        "Ran pa11y " <> (show $ length results) <>
        " times with the following settings: " <> (T.unpack pa11ySettings)
      print $
        (show numErrored) <> " instance(s) of pa11y reported errors. Check the reports for details."
      if numWentFine > 0
        then do
          print $
            "However, the other " <> (show numErrored) <>
            " instance(s) of pa11y did not report any errors. "
        else do
          print $ "Oh no! It looks like all of the input pages have errors :-("
    else do
      print $ "Everything looks good!"
