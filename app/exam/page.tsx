import exams from '@/exams.json';

export default function ExamPage() {
  return (
    <div className="p-8">
      {/* Grid Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Tüm Sınavlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map((exam) => (
            <div 
              key={exam.id}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-800">{exam.desc}</h3>
              <p className="mt-2 text-sm text-gray-600">{exam.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
