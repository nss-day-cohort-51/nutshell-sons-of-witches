export const TodaysDate = () => {

  let  date = new Date(Date.now())
  const todaysDate = date.toDateString()
  
    return (
    <>
        <h3>{todaysDate}</h3>
    </>
  );
 }
