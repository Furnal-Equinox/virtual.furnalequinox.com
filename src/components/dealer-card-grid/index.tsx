import React from 'react'
import { Dealer, DealerCard } from '../cards'

interface Props {
  data: Dealer[]
}

const DealerCardGrid: React.FC<Props> = ({ data }: Props) => {
  const cards = data.map(dealer =>
    <div
      className={`${(dealer?.isPremium ?? false) ? 'col-lg-12' : 'col-lg-6'}`}
      key={dealer?.slug ?? '#'}
    >
      <DealerCard
        title={dealer?.title ?? undefined}
        dealer={dealer?.dealer ?? undefined}
        description={dealer?.description ?? undefined}
        banner={dealer?.banner ?? undefined}
        slug={dealer?.slug ?? undefined}
      />
    </div>
  )

  return (
    <div className='container'>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default DealerCardGrid
