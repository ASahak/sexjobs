import React from 'react';
import PropTypes from 'prop-types';
import {Input, Select, Button} from 'Components/Shared/UI';

const UpdateInvoice = ({data = {}}) => {

    return (
        <div>
            <Input
                label={{title: 'Profile name*', color: '#F4F7FA'}}
                value={data.name}
                fullWidth={true}
                placeholder="Niet ingevuld"
                helperText="*Mandatory"
                maxCounter={30}
                margin={[0, 0, 16, 0]}
            />
            <Select
                margin={[0, 0, 16, 0]}
                defaultValue={data.company}
                options={data.companies || []}
                rules={{}}
                label={{title: "Type of Company", color: '#fff'}}
                placeholder="Company type?"
                size={'md'}
                fullWidth={true}
            />
            <h4 className="form-flex-inputs-title">Address</h4>
            <div className="flex-inputs">
                <Input
                    type="text"
                    name="address"
                    value="Wazellaan"
                    width={'80%'}
                    margin={[0, 8, 16, 0]}
                />
                <Input
                    width={'20%'}
                    type="text"
                    name="commerce_number"
                    value="12 B"
                    margin={[0, 0, 16, 8]}
                />
            </div>
            <div className="flex-inputs">
                <Input
                    type="number"
                    name="a"
                    value="2032"
                    width={'30%'}
                    margin={[0, 8, 0, 0]}
                />
                <Input
                    width={'20%'}
                    type="text"
                    name="b"
                    value="BT"
                    margin={[0, 8, 0, 8]}
                />
                <Input
                    width={'50%'}
                    type="text"
                    name="c"
                    value="Den Haag"
                    margin={[0, 0, 0, 8]}
                />
            </div>
            <p className="like-helper-text">De vier cijfers nbit de pstcode zijn verplicht</p>
            <Button
                type="submit"
                size={'md'}
                text="Save changes"
                typeButton="primary"
                width={250}
                mobileFullWidth={true}
                margin={[30, 0, 0, 0]}
            />
        </div>
    )
}
UpdateInvoice.propTypes = {
    data: PropTypes.object.isRequired,
}
export default UpdateInvoice;