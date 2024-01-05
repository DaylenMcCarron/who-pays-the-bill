import { Button, Form, Alert } from "react-bootstrap";
import { useRef } from "react";

const Stage1 = () => {

    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        // Run Validation
        // add to list
        

        console.log(value);
        textInput.current.value = '';
    }

    return(
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Add player name"
                        name="player"
                        ref={textInput}
                    />
                </Form.Group>

                    {/* {Show Errors} */}

                <Button className="miami" variant="primary" type="submit">
                    Add player
                </Button>

            </Form>
        </>
    )
}

export default Stage1