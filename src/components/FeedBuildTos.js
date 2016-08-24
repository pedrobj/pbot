import React, { Component } from 'react'

export default class FeedBuildTos extends Component {
  render() {
    const { data } = this.props
    return (
		<div class="feed-row">
			<div class="feed-icons" data-size="small" data-show-tree="true" data-path="/img/tos/icons/classes/" data-ext=".png"></div>
			<div class="feed-content">
				<span class="feed-username">	
					<a href="/profile/{data.User.username}">{data.User.username}</a>
				</span>
				<span class="feed-time">{data.Build.modified_nice}</span>	
				<div class="feed-badges">
					<span class="topuser-badge glyphicon glyphicon-education tp hide" title="Top Rated Author"></span>
					<span class="fire-badge glyphicon glyphicon-fire tp hide" title="Hot Rising Build"></span>
					<span class="popular-badge glyphicon glyphicon-comment tp hide" title="Popular Build"></span>
				</div>	
				<span class="feed-title">
					<a class="_view color-{data.Classe.slug}" href="{data.Build.url}">{data.Build.title}</a>
				</span>
				<span class="feed-classname">{data.Build.tags}</span>
				<div class="feed-info">
					<div class="feed-level tp" title="Level" data-container="body">{data.Build.level}</div>
					<div class="text-center" style="min-width: 0;">
						<span class="glyphicon glyphicon-text-width tp" data-container="body" style="color: #000; text-shadow: 0 0 2px #000;" data-html="true" title="Content score: <b><font color='#000'>{data.Build.content}</font></b>"></span>
						
						<span class="feed-updated tp updated" data-html="true">
								<span class="glyphicon glyphicon-time"></span>
						</span>
					</div>	
					<div class="feed-ratings">
						<span style="color:#FFCC00">{data.Build.votes_total}</span><br/>
						<span class="rating tp" data-placement="right" title="{data.Build.rating}%">
							<span style="width: {data.Build.rating}%;"></span>
						</span>
					</div>	
					<div class="feed-numbers">
						<div>
							<span class="glyphicon glyphicon-eye-open" title="Views"></span> {data.Build.views}
						</div>
						<div>
							<span class="glyphicon glyphicon-comment" title="Comments"></span> {data.Build.comments}
						</div>
					</div>		
				</div>
				<div class="feed-more">
					<div class="feed-las"></div>
				</div>
			</div>
			<div class="feed-rising tp" title="Likes Last Week" data-container="body" style="display:none;">
				<span class="glyphicon glyphicon-chevron-up"></span> {data.Build.votes_rising}
			</div>
		</div>
    )
  }
}