// import generateID from "hyperid"
const history = [
  {
    _id: 3000120,
    action: 'create',
    author: 'author 01',
    context: 'campaign'
  },
  {
    _id: 3000121,
    action: 'comment',
    author: 'author 01',
    context: 'That was fast'
  },
  {
    _id: 3000122,
    action: 'rename',
    author: 'author 02',
    context: { old: 'Email', new: 'Emails' }
  }
]

const defaultState = {
  campaigns: {
    "1002131": {
      name: "Emails",
      campaign: 1,
      isActive: true,
      createdAt: 1549491942539,
      history
    },
    "1002134": {
      name: "Emails",
      campaign: 2,
      isActive: true,
      createdAt: 1549690942539,
      history:[{
        _id: 3000120,
        action: 'create',
        author: 'author 01',
        context: 'campaign'
      },]
    },
    "1002135": {
      name: "Push notification",
      campaign: 3,
      isActive: false,
      createdAt: 1549692542539,
      history
    }
  },
  selected: undefined
}

export const COMMENT_CAMPAIGN = 'COMMENT_CAMPAIGN'
export const RENAME_CAMPAIGN = 'RENAME_CAMPAIGN'
export const SELECT_CAMPAIGN = 'SELECT_CAMPAIGN'
export const TOGGLE_STATUS_CAMPAIGN = 'TOGGLE_STATUS_CAMPAIGN'

function addComment(payload, campaigns) {
  let newCampaigns = campaigns[payload.id].history.push(payload)
  return newCampaigns
}

function renameCampaign(payload, campaigns) {
  let newCampaigns = { ...campaigns }
  campaigns[payload.id].name = payload.name
  return newCampaigns
}

function statusToggleCampaign(payload, campaigns) {
  let newCampaigns = { ...campaigns }
  campaigns[payload.id].isActive = payload.status
  return newCampaigns
}

export default function dataReducers(state = defaultState, action) {
  switch (action.type) {
    case COMMENT_CAMPAIGN:{
      let campaigns = renameCampaign(action.payload, state.campaigns)
      return {...state, campaigns }
    }
    
    case RENAME_CAMPAIGN:{
      let campaigns = addComment(action.payload, state.campaigns)
      return {...state, campaigns }
    }

    case SELECT_CAMPAIGN: {
      const selected = action.payload.id
      return { ...state, selected }

    }
    case TOGGLE_STATUS_CAMPAIGN: {
      let campaigns = statusToggleCampaign(action.payload, state.campaigns)
      return {...state, campaigns }

    }
    default:
      return state;
  }
}

