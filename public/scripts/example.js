// tutorial1.js
var CommentBox = React.createClass({
    render: function() {
        return ( < div className = "commentBox" >
            Hello, World!This is Jason & rsquo; s CommentBox < /div>
        );
      }
    }
  );

  var CommentList = React.createClass(
  {
    render: function(){
      return (
        <div className="commentList">
        Hey commentList here!
        </div >
        )
    }
});
React.render( < CommentBox / > ,
    document.getElementById('content')
);