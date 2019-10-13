import React from 'react';

export default interface ISearch {
    setStrMovie:React.Dispatch<React.SetStateAction<string>>,
    setIsFetching:React.Dispatch<React.SetStateAction<boolean>>
}
