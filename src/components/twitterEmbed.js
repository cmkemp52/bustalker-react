import React from "react";
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const tweets = props =>{
    return(
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="MARTASERVICE"
            theme="dark"
            options={{height: 220}}
        />
    )
}

export default tweets;