export const Header = () => {
    return (
      <>
        <h1 className="title">Dashboard</h1>
			<ul className="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li className="divider">/</li>
				<li><a href="#" className="active">Dashboard</a></li>
			</ul>
      </>
    )
  }