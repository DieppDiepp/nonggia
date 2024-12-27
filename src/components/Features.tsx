import React from 'react';
import { Leaf, Calendar, Bell, Sprout } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    title: 'Nhận Diện Cây Trồng',
    description: 'Nhập loại cây của bạn và nhận hướng dẫn chăm sóc phù hợp cho từng loại cây.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-green-600" />,
    title: 'Theo Dõi Sinh Trưởng',
    description: 'Ghi lại ngày trồng và theo dõi quá trình phát triển với tính năng theo dõi thời gian.'
  },
  {
    icon: <Bell className="h-6 w-6 text-green-600" />,
    title: 'Nhắc Nhở Chăm Sóc',
    description: 'Không bỏ lỡ lịch tưới nước hoặc bón phân với hệ thống thông báo thông minh.'
  },
  {
    icon: <Sprout className="h-6 w-6 text-green-600" />,
    title: 'Tư Vấn Theo Mùa',
    description: 'Nhận các khuyến nghị chuyên môn dựa trên khí hậu địa phương và mùa vụ.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Mọi Thứ Bạn Cần Cho Canh Tác Thành Công
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}