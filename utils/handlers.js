const UiGenerateMargin = (marginProp, directionProp) => {
    let margin = '';
    let direction;
    const marginDetect = () => {
        return marginProp.reduce((acc, item) => {
            acc += item + 'px ';
            return acc
        }, '')
    }
    if (marginProp.constructor === Array || !isNaN(marginProp)) {
        margin = typeof marginProp === 'number' ?
            marginProp + 'px' : marginDetect() || '0px';
    } else margin = 0;
    if (directionProp) {
        direction = {
            ...(directionProp === 'center' ? {
                marginLeft: 'auto',
                marginRight: 'auto',
            }: {}),
            [directionProp === 'right' ? 'marginLeft' : 'marginRight']: 'auto',
        };
    }
    return {
        margin,
        ...direction,
    }
}

const UIGetMarginLeftRight = (margin) => {
    if (margin.constructor === Array) {
        if (margin.length === 1) return 2 * margin[0];
        return ((margin[1] || 0) + (margin[3] || 0)) * ((margin[3] || margin[3] === 0) ? 1 : 2)
    } else if (typeof margin === 'number') return margin * 2
}

const getTitleByCategory = async (query, level) => {
    try {
        const dummyList = (await import('dummyData/CategoriesList')).default;
        const currentCategory = query.hasOwnProperty('subCategory') ? dummyList.find(_ => _.pathname.indexOf(query.category) > -1).labels || [] : dummyList;
        for (let i = currentCategory.length - 1; i >= 0; i--) {
            if (currentCategory[i].pathname.indexOf(query[level]) > -1) {
                return currentCategory[i].title
            }
        }
    } catch (err) {
        console.error(err.message)
    }
}

const calculateIconsForOverflow = (mainWrap, overflowList, visibleIcons, maxIconCountInWrap) => {
    const padding = getComputedStyle(mainWrap, null).getPropertyValue('padding-left').split('px')[0] * 2;
    const mainWrapRect = mainWrap.getBoundingClientRect();
    const titleRect = mainWrap.children[0].getBoundingClientRect();
    const overlapCount = [];
    const _overFlowList = overflowList.filter(e => !e.props['data-complete']);

    for (let i = 0; i <= visibleIcons.length; i++) {
        if (mainWrapRect.width - padding < (titleRect.width + 40) + i * 40 || i >= maxIconCountInWrap) {
            overlapCount.push(visibleIcons[i - 1].props['data-complete']);
            if (!_overFlowList.find(e => e.props['data-complete'] === visibleIcons[i - 1].props['data-complete'])) {
                _overFlowList.push(visibleIcons[i - 1])
            }
        }
    }
    const _flexibleIcons = [...visibleIcons];
    overlapCount.forEach(attr => {
        const findIndex = _flexibleIcons.findIndex(e => e.props['data-complete'] === attr);
        if (findIndex > -1) _flexibleIcons.splice(findIndex, 1)
    });
    return {
        _flexibleIcons,
        _overFlowList,
    }
}

const generateRouterReplace = (router, obj) => {
    router.push({
        pathname: router.pathname,
        query: {
            ...router.query,
            ...obj,
        }
    }, undefined, {scroll: false, shallow: true});
}

const generateStorePropertyValues = (query, mainList, queryName) => {
    const _routerProp = typeof query[queryName] === 'string' ? [query[queryName]] : query[queryName] || [];
    const _allPropList = [...mainList];
    return _routerProp.reduce((acc, item) => {
        const foundedItem = _allPropList.find(e => e.value === item);
        if (foundedItem) acc.push(foundedItem)
        return acc;
    }, [])
}

function getRadianAngle(degreeValue) {
    return (degreeValue * Math.PI) / 180
}
const createImage = url =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', error => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
        image.src = url
    })

async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const maxSize = Math.max(image.width, image.height)
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

    // set each dimensions to double largest dimension to allow for a safe area for the
    // image to rotate in without being clipped by canvas context
    canvas.width = safeArea
    canvas.height = safeArea

    // translate canvas context to a central location on image to allow rotating around the center.
    ctx.translate(safeArea / 2, safeArea / 2)
    ctx.rotate(getRadianAngle(rotation))
    ctx.translate(-safeArea / 2, -safeArea / 2)

    // draw rotated image and store data.
    ctx.drawImage(
        image,
        safeArea / 2 - image.width * 0.5,
        safeArea / 2 - image.height * 0.5
    )
    const data = ctx.getImageData(0, 0, safeArea, safeArea)

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    // paste generated rotate image with correct offsets for x,y crop values.
    ctx.putImageData(
        data,
        Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
        Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
    )

    // As Base64 string
    // return canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise(resolve => {
        canvas.toBlob(file => {
            resolve(URL.createObjectURL(file))
        }, 'image/jpeg')
    })
}

const adjustDays = (yearValue, monthValue, setState) => {
    const year = yearValue;
    const month = parseInt(monthValue);
    const days = new Date(year, month, 0).getDate();
    setState(days || 31);
}

export {
    UiGenerateMargin,
    UIGetMarginLeftRight,
    getTitleByCategory,
    generateStorePropertyValues,
    generateRouterReplace,
    getCroppedImg,
    calculateIconsForOverflow,
    adjustDays,
};