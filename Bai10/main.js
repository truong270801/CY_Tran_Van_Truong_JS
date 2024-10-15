let text = "Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi.Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á."

function largeCharacters(str){
    let words = str.split(" ");

    let maxCount = 0;
    for(let i = 0 ; i < words.length ; i++){
        if(words[i].length > maxCount){
            maxCount = words[i].length
        }
    }
    console.log("Từ có chữ cái nhiều nhất: ", words.find(word => word.length === maxCount));
}

largeCharacters(text);