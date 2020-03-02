import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'

import * as ToolsActions from '../../store/tools/toolsActions'

const Remove = ({ toolToRemove, removeTool, confirmRemoveTool }) => {

    return (
        <>
            {toolToRemove &&
                <div className="remove-component">
                    <div className="remove-component-content card-main-flat">
                        <div className="remove-component-header">
                            {toolToRemove.title}
                            <span onClick={() => removeTool(null)} className="icon-close float-right"></span>
                        </div>

                        <div className="remove-component-body">
                            Are you sure you want to remove {toolToRemove.title}?
                        </div>

                        <div className="remove-component-footer">
                            <button onClick={() => removeTool(null)} className="btn-cancel">Cancel</button>
                            <button onClick={() => confirmRemoveTool(toolToRemove)}
                                className="btn-confirm">Yes, remove</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => ({ tools: state.tools, toolToRemove: state.toolToRemove });
const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Remove)