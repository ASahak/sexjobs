import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import {Button, Select, InlineToast, Tag} from 'Components/Shared/UI';
import CategoryList from 'dummyData/CategoriesList';
import {PRICES} from 'utils/constants';

const _categoryList = CategoryList.map(e => {
    return {title: e.title, value: e.value}
});
const Category = (props) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const { register, handleSubmit, errors, watch, control } = useForm({
        mode: 'onKeypress',
    });

    const valueOfCategory = watch('category', '');
    const category = CategoryList.find(e => e.value === valueOfCategory);

    const toggleSelected = useCallback((v) => {
        const index = selectedTags.indexOf(v);
        if (index > -1) selectedTags.splice(index, 1)
        else if (selectedTags.length === 3) return
        else selectedTags.push(v)
        setSelectedTags([...selectedTags]);
    }, [valueOfCategory, selectedTags]);

    const CategoryTabs = useCallback(() => {
        return category && category.labels ? category.labels.map(tag => <Tag
            margin={[0, 10, 10, 0]}
            text={tag.title}
            selected={selectedTags.indexOf(tag.title) > -1}
            key={tag.title}
            id={tag.title}
            toggle={(v) => toggleSelected(v)}/>) : null
    }, [valueOfCategory, selectedTags, category])

    const saveCategory = async (data) => {
        props.goToNext('three', data.category)
        // todo must make Saving functionality
    }

    useEffect(() => {
        setSelectedTags([]);
    }, [valueOfCategory])

    return (
        <div className="category-content">
            <form onSubmit={handleSubmit(saveCategory)}>
                <div className="category-select">
                    {valueOfCategory ? <span className="price-label">{PRICES.category[valueOfCategory] > 0 ? ('€ ' + PRICES.category[valueOfCategory] + ' per day') : 'gratis'}</span> : ''}
                    <Controller
                        as={
                            <Select />
                        }
                        margin={[0, 0, 16, 0]}
                        defaultValue=""
                        control={control}
                        name="category"
                        options={_categoryList}
                        rules={{}}
                        label={{title: "Category", color: '#fff'}}
                        errors={errors.category && errors.category.message}
                        placeholder="Kies een categorie"
                        size={'md'}
                        fullWidth={true}
                    />
                </div>
                {(valueOfCategory && PRICES.category[valueOfCategory] > 0) ? <InlineToast
                    title={'Extra advertisement in this category are paid'}
                    type={'info'}
                /> : ''}
                {(valueOfCategory && category?.labels) ? <div className="labels-container">
                    <div className="label-description">
                        <h4>Label(s) <span>Je hebt nog 3 labels</span></h4>
                        <p>Selecteer hier waarmee jij je het meest wil
                            onderscheiden.</p>
                        <div className="category-tabs">
                            {CategoryTabs()}
                        </div>
                    </div>

                </div> : ''}
                <Button
                    disabled={!valueOfCategory}
                    type="submit"
                    typeButton="primary"
                    width={250}
                    mobileFullWidth={true}
                    text="Ga door naar advertentie annmaken"
                    margin={[30, 0, 0]}
                />
            </form>
        </div>
    )
}
Category.propTypes = {
    goToNext: PropTypes.func,
};
export default React.memo(Category);
