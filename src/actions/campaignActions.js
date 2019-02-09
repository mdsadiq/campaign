import { COMMENT_CAMPAIGN, RENAME_CAMPAIGN, SELECT_CAMPAIGN } from '../reducers/dataReducer'

export function renameComment(name){
    return {
        type: RENAME_CAMPAIGN,
        payload:{
            name
        }
    }
}

export function selectCampaign(id){
    return {
        type: SELECT_CAMPAIGN,
        payload:{
            id
        }
    }
}

export function commentCampaign(data){
    return {
        type: COMMENT_CAMPAIGN,
        payload:{
            author: 'user01',
            context: data.context,
            createdAt: new Date().getTime()
        }
    }
}
