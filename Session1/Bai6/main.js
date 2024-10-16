let arr = [
    { brand: 'Huynh Dai', model: 'Santafe' },
    { brand: 'Huynh Dai', model: 'Sonata' },
    { brand: 'Vinfast', model: 'Lux SA' },
    { brand: 'Vinfast', model: 'Lux A' },
    { brand: 'Toyota', model: 'Camry' },
    { brand: 'Toyota', model: 'Vios' }
];

function transformArray(array) {
    const result = [];

    array.forEach(item => {
        let brandGroup = result.find(group => group[0]?.brand === item.brand);
        if (!brandGroup) {
            brandGroup = [];
            result.push(brandGroup);
        }
        brandGroup.push({ brand: item.brand, model: item.model });
    });
    return result;
}

const transformedArray = transformArray(arr);
console.log(transformedArray);
