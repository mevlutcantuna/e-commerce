import "../../styles/Filters.scss";
import { Button } from "@material-ui/core";

function Filters(props) {
  const filterNames = [
    "All",
    "Clothes",
    "Phones",
    "HeadPhones",
    "Home",
    "Toys for Kids",
    "Books",
    "Flowers",
  ];
  return (
    <div className={"filters"}>
      {filterNames.map((item) => (
        <Button
          key={filterNames.indexOf(item)}
          onClick={() => props.showFilterProducts(item)}
          style={{
            marginLeft: "1rem",
            marginBottom: "0.75rem",
          }}
          variant={"outlined"}
          color={"default"}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default Filters;
