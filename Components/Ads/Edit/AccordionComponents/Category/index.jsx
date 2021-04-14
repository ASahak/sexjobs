import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {Input, Tag} from 'Components/Shared/UI';
import CategoryList from 'dummyData/CategoriesList';

const selectedCategory = 'lady-pleasure';
const currentCategory = CategoryList.find(e => e.value === selectedCategory) || {};
const Category = (props) => {
    const styles = UseStyles({}, {link: true});

    const categoryTitle = currentCategory.title || '-';
    const categoryLabels = currentCategory.labels || [];
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleSelected = useCallback((v) => {
        const index = selectedTags.indexOf(v);
        if (index > -1) selectedTags.splice(index, 1)
        else if (selectedTags.length === 3) return
        else selectedTags.push(v)
        setSelectedTags([...selectedTags]);
    }, [selectedTags]);

    const CategoryLabels = useCallback(() => {
        return categoryLabels.map(tag => <Tag
            margin={[0, 10, 10, 0]}
            text={tag.title}
            selected={selectedTags.indexOf(tag.title) > -1}
            key={tag.title}
            id={tag.title}
            toggle={(v) => toggleSelected(v)}/>)
    }, [categoryLabels, selectedTags])

    return (<div className={styles['category-container']}>
        <Input
            key={props.updateKey}
            type="text"
            fullWidth={true}
            readonly={true}
            value={categoryTitle}
            margin={[0, 0, 26, 0]}
        />
        <h4>Label(s) <span>Je hebt nog 3 labels</span></h4>
        <p>Selecteer hier waammee jij het meest will onderscheiden.</p>
        <div className={styles['labels-container']}>
            {CategoryLabels()}
        </div>
    </div>)
}
Category.propTypes = {
    updateKey: PropTypes.bool,
};
export default Category;