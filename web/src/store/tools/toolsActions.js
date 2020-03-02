import api from '../../services/api'

export function removeTool(tool) {
    return { type: 'REMOVE_TOOL_MODAL', payload: tool }
}

export function confirmRemoveTool(tool) {
    return dispatch => {
        api.delete(`/tools/${tool.id}`)
            .then(resp => {
                dispatch({ type: 'REMOVE_TOOL_CONFIRMATION', payload: tool.id })
            })
    }
}

export function addShowed(show) {
    return { type: 'ADD_TOOL_SHOWED', payload: show }
}

export function addTools(tools) {
    return { type: 'ADD_TOOLS', payload: tools }
}

export function addTool(tool) {
    return dispatch => {
        api.post("/tools", { ...tool })
            .then(resp => {
                dispatch({ type: 'ADD_TOOL', payload: resp.data })
            })
    }
}

export function fetchTools() {
    return dispatch => {
        api.get("/tools")
            .then(resp => {
                dispatch({ type: 'TOOLS_FETCHED', payload: resp.data })
            })
    }
}

export function onChangeSearchBox(value) {
    return { type: 'ON_CHANGE_SEARCH', payload: value };
}

export function setSearchInTagsOnly() {
    return { type: 'SEARCH_IN_TAGS_ONLY' };
}