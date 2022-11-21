import { Dispatch, SetStateAction, FC } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

interface SearchBoxProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBox: FC<SearchBoxProps> = (props) => {

  const { setSearchTerm } = props;

  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="standard" >
        <InputLabel htmlFor="standard-adornment-amount">Search...</InputLabel>
        <Input
        id="standard-adornment-amount"
        type='search'
        onChange={(e) => setSearchTerm(e.target.value.trim().toLowerCase())}
        />
    </FormControl>
  );
};

export default SearchBox;