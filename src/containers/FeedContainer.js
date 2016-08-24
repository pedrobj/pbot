import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBuilds} from '../actions/index';
//import FeedBuildTos from '../components/FeedBuildTos';


class FeedContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {params: ''};

        this.onKeywordChange = this.onKeywordChange.bind(this);
    }

    onKeywordChange(e) {
        this.setState({keyword: e.target.value});
        this.props.fetchBuilds(this.state.params);
    }

    render() {
        return (
            <div className="form-row">
                <input
                    onChange={this.onKeywordChange}
                    value={this.state.searchTerm}
                    className="search-input"
                    placeholder="keyword..."
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { builds: state.data.builds, }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchBuilds}, dispatch);
}

export default connect(null, mapDispatchToProps)(FeedContainer);