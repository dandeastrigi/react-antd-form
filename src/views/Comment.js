import React from 'react'

export class Comment extends React.Component {
    render() {
        return <div className="comment">
            <p>{ this.props.text }</p>
        </div>
    }
}

export default Comment;