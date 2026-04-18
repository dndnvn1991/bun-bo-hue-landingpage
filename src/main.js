import './style.css';

const menuItems = [
  {
    name: "Phở gà ta truyền thống",
    price: "45.000đ",
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb431?auto=format&fit=crop&q=80&w=600",
    desc: "Bánh phở mềm, thịt gà đồi dai giòn, nước dùng trong vắt thanh ngọt."
  },
  {
    name: "Phở gà xé phay",
    price: "50.000đ",
    img: "https://images.unsplash.com/photo-1555126634-9ce570a99a80?auto=format&fit=crop&q=80&w=600",
    desc: "Gà xé nhỏ trộn lá chanh, thơm lừng vị Bắc chuẩn vị."
  },
  {
    name: "Phở gà nấm hương",
    price: "55.000đ",
    img: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&q=80&w=600",
    desc: "Nước dùng thêm vị ngọt sâu từ nấm hương rừng Tây Bắc."
  },
  {
    name: "Bún thang",
    price: "60.000đ",
    img: "https://images.unsplash.com/photo-1625937329935-287adaaaadc2?auto=format&fit=crop&q=80&w=600",
    desc: "Sợi bún nhỏ xíu, topping thái chỉ tinh tế: trứng tráng, giò lụa, thịt gà."
  },
  {
    name: "Cháo gà",
    price: "40.000đ",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
    desc: "Cháo nếp quánh mịn, ăn kèm hành phi và quẩy giòn rụm."
  },
  {
    name: "Bánh cuốn nhân gà",
    price: "35.000đ",
    img: "https://images.unsplash.com/photo-1626804475297-41609ea0aec8?auto=format&fit=crop&q=80&w=600",
    desc: "Biến tấu độc đáo, vỏ bánh mỏng tang nhân thịt gà băm mộc nhĩ."
  },
  {
    name: "Nem chua rán",
    price: "55.000đ / đĩa",
    img: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?auto=format&fit=crop&q=80&w=600",
    desc: "Món ăn vặt kinh điển, vỏ giòn xốp, trong dai ngọt."
  },
  {
    name: "Trứng chần nước dùng",
    price: "10.000đ",
    img: "https://images.unsplash.com/photo-1533089859736-aca6e00ea39c?auto=format&fit=crop&q=80&w=600",
    desc: "Trứng gà ta chần tái béo ngậy trong nước dùng phở."
  },
  {
    name: "Nước chanh mật ong",
    price: "20.000đ",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    desc: "Giải khát thanh mát, cân bằng vị giác hoàn hảo."
  },
  {
    name: "Trà đá / Trà mạn",
    price: "5.000đ",
    img: "https://images.unsplash.com/photo-1576092762741-289b4f0b2405?auto=format&fit=crop&q=80&w=600",
    desc: "Hương vị trà mạn chát nhẹ, hậu ngọt chuẩn quán xá Hà thành."
  }
];

// Populate menu grid
const menuGrid = document.getElementById('menu-grid');

if (menuGrid) {
  menuItems.forEach((item, index) => {
    const delay = index * 100;
    const card = document.createElement('div');
    card.className = 'menu-card fade-in';
    card.style.animationDelay = `${delay}ms`;
    
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="menu-img">
      <div class="menu-info">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <p style="color: var(--color-text-light); font-size: 0.9rem; margin-top: 0.5rem;">${item.desc}</p>
      </div>
    `;
    
    menuGrid.appendChild(card);
  });
}

// Form Submission handling
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get values
    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    
    console.log("=== ĐƠN ĐẶT HÀNG MỚI ===");
    console.log("Khách hàng:", name);
    console.log("Số điện thoại:", document.getElementById('phone').value);
    console.log("Giờ đến:", document.getElementById('time').value);
    console.log("Món chính:", item);
    console.log("Ghi chú:", document.getElementById('note').value);
    
    // Alert success
    alert(`Cảm ơn ${name}! Đơn đặt bàn/hàng cho món ${item} đã được gửi thành công. Chúng tôi sẽ sớm liên hệ lại.`);
    
    // Reset form
    bookingForm.reset();
  });
}

// Smooth scroll implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
