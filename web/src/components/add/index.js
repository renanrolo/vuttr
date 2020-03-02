import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'

import * as ToolsActions from '../../store/tools/toolsActions'

const Add = ({ addToolVisible, addShowed, addTool }) => {

    const [toolName, setToolName] = useState("");
    const [toolLink, setToolLink] = useState("");
    const [toolDescription, setToolDescription] = useState("");
    const [toolTags, setToolTags] = useState("");

    const close = () => {
        addShowed(false);
    }

    const submitForm = () => {

        const tags = toolTags.replace(",").replace(";").split(' ');

        const tool = {
            title: toolName,
            link: toolLink,
            description: toolDescription,
            tags: tags
        }

        addTool(tool);
    }

    return (
        <div className={"add-component " + (addToolVisible === true ? 'add-show' : '')}>
            <span onClick={close} className="icon-close btn-close"></span>
            <h3>+ Add new tool</h3>

            <div className="form-row">
                <label htmlFor="toolName">Tool Name</label>
                <input
                    className="form-text"
                    value={toolName}
                    onChange={e => setToolName(e.target.value)}
                    id="toolName"
                    type="text"
                    required />
            </div>

            <div className="form-row">
                <label htmlFor="toolLink">Tool Link</label>
                <input
                    className="form-text"
                    value={toolLink}
                    onChange={e => setToolLink(e.target.value)}
                    id="toolLink"
                    type="text" />
            </div>

            <div className="form-row">
                <label htmlFor="toolDescription">Tool description</label>
                <textarea
                    className="form-text"
                    value={toolDescription}
                    onChange={e => setToolDescription(e.target.value)}
                    id="toolDescription"
                    rows="4" />
            </div>

            <div className="form-row">
                <label htmlFor="toolTags">Tags</label>
                <input
                    className="form-text"
                    value={toolTags}
                    onChange={e => setToolTags(e.target.value)}
                    id="toolTags"
                    type="text" />
            </div>

            <div className="text-right mt-4">
                <button
                    onClick={submitForm}
                    className="btn btn-primary-neutral"
                    type="button">Add tool</button>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({ tools: state.tools, addToolVisible: state.addToolVisible });
const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Add)