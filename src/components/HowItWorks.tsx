import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Cách Người Bạn Nông Dân Hoạt Động
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Đăng Ký Cây Trồng</h3>
                <p className="text-gray-600">Thêm cây công nghiệp hoặc cây ăn trái vào vườn điện tử và cung cấp thông tin về giống, ngày trồng và vị trí.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nhận Kế Hoạch Chăm Sóc</h3>
                <p className="text-gray-600">Nhận hướng dẫn chăm sóc và lịch trình dựa trên loại cây và giai đoạn phát triển cụ thể.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Theo Dõi và Tối Ưu</h3>
                <p className="text-gray-600">Theo dõi sự phát triển và nhận cảnh báo kịp thời về bón phân, phòng trừ sâu bệnh và thu hoạch.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80"
              alt="Vườn sầu riêng"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}