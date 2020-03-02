const INITIAL_STATE = {
    tools: [],
    filteredTools: [],
    addToolVisible: false,
    toolToRemove: null,
    searchBox: '',
    searchInTagsOnly: false
};

export default function reduceTools(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'REMOVE_TOOL_CONFIRMATION':
            const newState = state.tools.filter(e => e.id !== action.payload);
            return { ...state, tools: newState, toolToRemove: null }

        case 'REMOVE_TOOL_MODAL':
            return { ...state, toolToRemove: action.payload }

        case 'ADD_TOOL_SHOWED':
            return { ...state, addToolVisible: action.payload }

        case 'TOOLS_FETCHED':
            return { ...state, tools: action.payload }

        case 'ADD_TOOL':
            const newTools = [...state.tools];
            newTools.push(action.payload);
            return { ...state, tools: newTools, addToolVisible: false }

        case 'ON_CHANGE_SEARCH':
            return { ...state, searchBox: action.payload }

        case 'SEARCH_IN_TAGS_ONLY':
            return { ...state, searchInTagsOnly: !state.searchInTagsOnly }

        default:
            return state;
    }
}
