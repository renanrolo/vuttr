import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ToolsActions from '../../store/tools/toolsActions'

import ListItem from '../list-item'

class List extends Component {

    componentWillMount() {
        this.props.fetchTools();
    }

    isEmptyString(string) {
        if (!string)
            return true;

        if (string.replace(" ", "") === "")
            return true;

        return false;
    }

    filterTools(tools, search) {
        if (!tools)
            return [];

        let toolsFiltered = [...tools];

        if (!search)
            return toolsFiltered

        if (this.isEmptyString(search))
            return toolsFiltered

        toolsFiltered = toolsFiltered.filter(e =>
            (
                !this.props.searchInTagsOnly
                && (e.description.toLowerCase().indexOf(search.toLowerCase()) >= 0
                || e.title.toLowerCase().indexOf(search.toLowerCase()) >= 0)
            )
            || (
                e.tags.map(tag => {
                    return tag.toLowerCase().indexOf(search.toLowerCase()) >= 0
                }).includes(true)
            )
        );

        return toolsFiltered;
    }

    rederList() {
        const toolsList = this.filterTools(this.props.tools, this.props.searchBox)

        return toolsList.map((item) => (
            <ListItem key={item.id} item={item} removeTool={this.props.removeTool} />
        ))
    }

    render() {
        return (
            this.rederList()
        )
    }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List)