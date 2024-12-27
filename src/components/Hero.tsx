import React from 'react';
import { Leaf } from 'lucide-react';
import ParallaxImage from './ParallaxImage';

const images = {
  coffee: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80",
  pepper: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
  durian: "https://images.unsplash.com/photo-1601868833457-seventy-thirty?auto=format&fit=crop&w=800&q=80"
};

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Quản Lý Thông Minh
              <span className="text-green-600 dark:text-green-500"> Cây Công Nghiệp</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Chăm sóc chuyên biệt cho các loại cây giá trị cao như cà phê, tiêu, sầu riêng. Nhận hướng dẫn chuyên môn và nhắc nhở kịp thời để tối ưu năng suất và chất lượng cây trồng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <Leaf className="h-5 w-5" />
                Bắt Đầu Trồng
              </button>
              <button className="border border-green-600 text-green-600 dark:text-green-500 dark:border-green-500 px-8 py-3 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center justify-center gap-2">
                Tìm Hiểu Thêm
              </button>
            </div>
          </div>
          <div className="flex-1 h-[500px]">
            <ParallaxImage
              src={images.coffee}
              alt="Đồn điền cà phê"
              className="shadow-xl h-full"
              speed={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}