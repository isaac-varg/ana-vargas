import { Tags } from '@/types/Tags'
import React from 'react'
import Tag from './Tag'

type TagSelectionProps = {
    tags: Tags
}


const TagSelection = ({tags} : TagSelectionProps) => {
  return (
    <div className="flex flew-row flex-wrap justify-start sm:justify-center space-x-2 sm:space-x-10">
            <Tag key="All" tagName='All' />

            {tags.map( tag => {
                return <Tag key={tag} tagName={tag} />
            })}

    </div>
  )
}

export default TagSelection