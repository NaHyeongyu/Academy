# 주소록 프로그램

address_book = {}  # 주소록 데이터를 저장할 딕셔너리

def register_member():
    name = input("이름을 입력하세요: ")
    if name in address_book:
        print(f"{name}은(는) 이미 등록된 회원입니다.")
        return

    address = input("주소를 입력하세요: ")
    phone = input("전화번호를 입력하세요: ")
    address_book[name] = {"주소": address, "전화번호": phone}
    print(f"{name} 회원이 등록되었습니다.")
    print(f"===={address_book}====")

def view_member():
    name = input("조회할 회원의 이름을 입력하세요: ")
    if name in address_book:
        print(f"이름: {name}")
        print(f"주소: {address_book[name]['주소']}")
        print(f"전화번호: {address_book[name]['전화번호']}")
    else:
        print(f"{name} 회원은 등록되어 있지 않습니다.")

def update_member():
    name = input("수정할 회원의 이름을 입력하세요: ")
    if name in address_book:
        address = input("새로운 주소를 입력하세요: ")
        phone = input("새로운 전화번호를 입력하세요: ")
        address_book[name] = {"주소": address, "전화번호": phone}
        print(f"{name} 회원의 정보가 수정되었습니다.")
    else:
        print(f"{name} 회원은 등록되어 있지 않습니다.")

def delete_member():
    name = input("삭제할 회원의 이름을 입력하세요: ")
    if name in address_book:
        del address_book[name]
        print(f"{name} 회원이 삭제되었습니다.")
    else:
        print(f"{name} 회원은 등록되어 있지 않습니다.")

# 모든 회원 조회 함수
def view_all_members():
    if address_book:
        print("\n--- 모든 회원 목록 ---")
        for name, info in address_book.items():
            print(f"이름: {name}")
            print(f"주소: {info['주소']}")
            print(f"전화번호: {info['전화번호']}\n")
    else:
        print("등록된 회원이 없습니다.")

def main():
    while True:
        print("\n--- 주소록 프로그램 ---")
        print("1. 회원 등록")
        print("2. 회원 조회")
        print("3. 회원 수정")
        print("4. 회원 삭제")
        print("5. 모든 회원 조회")
        print("6. 프로그램 종료")

        choice = input("원하는 작업의 번호를 입력하세요: ")

        if choice == "1":
            register_member()
        elif choice == "2":
            view_member()
        elif choice == "3":
            update_member()
        elif choice == "4":
            delete_member()
        elif choice == "5":
            view_all_members()  # 모든 회원 조회 함수 호출
        elif choice == "6":
            print("프로그램을 종료합니다.")
            break
        else:
            print("잘못된 입력입니다. 다시 시도하세요.")

# 바로 실행
main()
