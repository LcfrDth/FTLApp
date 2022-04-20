import React from 'react';

// MUI
import {
    List,
    ListItem,
    Button,
    Typography,
    ListItemText,
} from "@material-ui/core";

const CheckoutDetails = ({ checkoutData, handleBackStep, handleNextStep }) => {
    return (
        <>
            <List>
                {checkoutData.live.line_items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemText
                            primary={item.name}
                            secondary={`Quantity: ${item.quantity}`}
                        />
                        <Typography variant="body2">
                            {item.line_total.formatted_with_symbol}
                        </Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="Total price" />
                    <Typography variant="body2">
                        {checkoutData.live.subtotal.formatted_with_code}
                    </Typography>
                </ListItem>
            </List>

            <div className="actions">
                <Button
                    size="medium"
                    onClick={(e) => handleBackStep(e, "Order Address")}
                    variant="contained"
                >
                    Go Back
                </Button>
                <Button
                    onClick={(e) => handleNextStep(e, "Order Payment")}
                    size="medium"
                    color="secondary"
                    variant="contained"
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default CheckoutDetails;
