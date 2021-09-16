const LookupItem = ({ itemInfo, history }) => {
  const { equ_Idx, description, name, amount } = itemInfo;
  const handleDetailInfo = () => {
    history.push(`/Apply/${equ_Idx}`);
  };
  return (
    <>
      <div className="itemBox" onClick={handleDetailInfo}>
        <span className="itemNumber">{equ_Idx}</span>
        <span className="category">{description}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
      </div>
    </>
  );
};

export default LookupItem;
