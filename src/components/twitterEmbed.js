import React from "react";
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const tweets = props =>{
    return(
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="MARTASERVICE"
            options={{height: 220}}
        />
    )
}

export default tweets;