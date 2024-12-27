import React from 'react';
import { Leaf, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-semibold">Người Bạn Nông Dân</span>
            </div>
            <p className="text-gray-400">Người bạn đồng hành tin cậy trong việc chăm sóc cây trồng và thành công trong nông nghiệp.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-green-400 transition-colors">Tính Năng</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">Cách Hoạt Động</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-green-400 transition-colors">Đánh Giá</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">hotro@nguoibannongdan.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">+84 (123) 456-789</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bản Tin</h3>
            <p className="text-gray-400 mb-4">Cập nhật thông tin mới nhất về kỹ thuật canh tác và tính năng mới.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-green-600 px-6 py-2 rounded-r-full hover:bg-green-700 transition-colors">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Người Bạn Nông Dân. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}