function MenuItem({image, name, content, price}) {
  return (
    <div className="menuItem">
        <div>
            <div style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div>
            <h1 style={{marginBottom: '10px'}}>{name}</h1>
            <h6 style={{marginBottom: '0px'}}>{content}</h6>
            <p>
                <i style={{color: 'red'}}>
                    {price} TL
                </i>
            </p>   
        </div>
        
      </div>
    </div>
  );
}

export default MenuItem;
