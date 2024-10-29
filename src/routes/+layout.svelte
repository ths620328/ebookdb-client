<nav>
	<ul>
		<li><a href="/">Authors</a></li>
		<li><a href="/categories">Categories</a></li>
		<li><a href="/favourites">Favourites</a></li>
		<li><a href="/recent">Recent</a></li>
		<li><a href="/statistics">Statistics</a></li>
		<li><a href="/search">Search</a></li>
	</ul>
	<img src="/images/book.png" alt="Book icon" />
</nav>

<div>
	<slot />
</div>

<style>
	nav {
		padding: 20px 80px;
		align-items: center;
	}

	div {
		width: 80%;
		margin: 0 auto;
		margin-top: 20px;
	}
</style>
