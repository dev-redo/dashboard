
export const renderLegend = (props:any) => {
    const { payload } = props;
    const colors = ["#e23f3d", "#92D050", "#375496", "#EDD600"];
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {
           payload.map((entry:any, index:any) => (
            index >=4 ? "" : (
            <p key={`item-${index}`} style={{marginLeft: '10px', color: "white", backgroundColor: colors[index] ,padding:"0.2rem"}}>✨{entry.value}</p>
            ))
        )}
      </div>
    );
  }
  