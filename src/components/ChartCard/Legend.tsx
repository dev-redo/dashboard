
export const renderLegend = (props:any) => {
    const { payload } = props;
    const colors = ['#82ca9d', '#8884d8', '#ec62e1', "#f8e749"];
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {
           payload.map((entry:any, index:any) => (
            index >=4 ? "" : (
            <p key={`item-${index}`} style={{marginLeft: '10px', color: colors[index]}}>✔️{entry.value}</p>
            ))
        )}
      </div>
    );
  }
  