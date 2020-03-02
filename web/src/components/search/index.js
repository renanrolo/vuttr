import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ToolsActions from '../../store/tools/toolsActions'
import Checkbox from '../stateless/checkbox'

const Search = ({ addShowed, searchBox, onChangeSearchBox, searchInTagsOnly, setSearchInTagsOnly }) => {
    return (
        <div className="row">

            <input
                className="form-text"
                placeholder="search"
                value={searchBox}
                onChange={(e) => onChangeSearchBox(e.target.value)}
                type="text" />

            <Checkbox
                label="search in tags only"
                checked={searchInTagsOnly}
                onChange={setSearchInTagsOnly}
            />

            <button
                id="addButton"
                className="btn btn-primary-neutral"
                onClick={() => addShowed(true)}
                type="button">
                + Add
              </button>
        </div>
    )
}

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Search)