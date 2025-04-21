$(function () {
  // 🔸 hotbook 영역에만 적용 (클래스명 변경 주의!)
  $(".hottype ul li button").click(function () {
    $(".hottype ul li button").removeClass("typechecked");
    $(this).addClass("typechecked");

    const keyword = $(this).text().trim().substring(0, 2); // 앞 2글자 추출

    fetch(
      `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(
        keyword
      )}`,
      {
        headers: {
          Authorization: "KakaoAK 8da443483254de2b1f9f4190858682cb",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const hotBooks = document.querySelector(".hotbooks");
        hotBooks.innerHTML = "";

        data.documents.slice(0, 10).forEach((book) => {
          const bookbox = document.createElement("div");
          bookbox.classList.add("bookbox");

          const booksDiv = document.createElement("div");
          booksDiv.id = "books";

          booksDiv.innerHTML = `
              <div class="cover">
                <a href="sub.html" target="_blank">
                  <img src="${book.thumbnail}" alt="책 표지" />
                </a>
              </div>
              <div class="bookinfo">
                <h3 id="booktitle">${book.title}</h3>
                <h4 id="writer">${book.authors.join(", ")}</h4>
              </div>
            `;

          bookbox.appendChild(booksDiv);
          hotBooks.appendChild(bookbox);
        });
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  });

  // 🔸 기본 선택된 버튼 클릭 (화면 처음 들어왔을 때)
  $(".hottype ul li button.typechecked").trigger("click");
});
