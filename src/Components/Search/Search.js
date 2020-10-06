import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (
        <Container>
            <div className='searchWork'>
                <h1 className="header text-center align-items-center ml-5 mt-5">I GROW BY HELPING PEOPLE IN NEED.</h1>
                <br></br>

                <InputGroup>
                    <FormControl
                        placeholder="Search your suitable volunteer work....."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button style={{height: '38px'}} variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>




            </div>

        </Container>
    );
};

export default Search;