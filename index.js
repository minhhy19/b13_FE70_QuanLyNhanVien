document.getElementById("btnXacNhan").onclick = function () {
    // Input
    let nhanVien = {
        maNhanVien: document.getElementById("maNhanVien").value,
        tenNhanVien: document.getElementById("tenNhanVien").value,
        chucVu: "",
        luongCanBan: document.getElementById("luongCanBan").value,
        soGiolam: document.getElementById("soGiolam").value,
        heSoLuong: document.getElementById("chucVu").value,
        tinhTongLuong: function () {
            let heSoLuong = this.heSoLuong;
            let luongCanBan = this.luongCanBan;
            let tongLuong = Number(heSoLuong) * Number(luongCanBan);
            return tongLuong;
        },
        xepLoaiNhanVien: function () {
            let soGiolam = Number(this.soGiolam);
            let xepLoai = "";

            if (soGiolam > 50 && soGiolam <= 80) {
                xepLoai = "Nhân viên trung bình";
            } else if (soGiolam > 80 && soGiolam <= 100) {
                xepLoai = "Nhân viên khá";
            } else if (soGiolam > 100 && soGiolam <= 120) {
                xepLoai = "Nhân viên giỏi";
            } else if (soGiolam > 120) {
                xepLoai = "Nhân viên xuất sắc";
            } else {
                xepLoai = "Nhân viên kém";
            }

            return xepLoai;
        },
    };

    // Lấy giá trị innerHTML của thẻ option được chọn trong thẻ select
    // B1: dom đến thẻ select
    let slChucVu = document.getElementById("chucVu");
    // options: trả về arrTag option bên trong thẻ select đó
    // selectedIndex: trả về index của option được chọn
    let arrOption = slChucVu.options;
    let optionDuocChon = arrOption[slChucVu.selectedIndex];

    nhanVien.chucVu = optionDuocChon.innerHTML;

    // console.log(nhanVien);
    document.getElementById("txtTenNhanVien").innerHTML = nhanVien.tenNhanVien;
    document.getElementById("txtMaNhanVien").innerHTML = nhanVien.maNhanVien;
    document.getElementById("txtChucVu").innerHTML = nhanVien.chucVu;
    document.getElementById("txtTongLuong").innerHTML =
        nhanVien.tinhTongLuong();
    document.getElementById("txtXepLoaiTrongThang").innerHTML =
        nhanVien.xepLoaiNhanVien();
};
