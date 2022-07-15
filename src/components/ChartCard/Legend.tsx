
export const renderLegend = (props:any) => {
    const { payload } = props;
  
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {
          payload.map((entry:any, index:any) => (
            index >=4 ? "" : (
            <p key={`item-${index}`} style={{marginLeft: '10px'}}>{entry.value}</p>
            ))
        )}
      </div>
    );
  }
  