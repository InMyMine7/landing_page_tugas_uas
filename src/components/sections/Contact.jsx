import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, lines, color }) => (
    <div className="flex items-start space-x-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {lines.map((line, index) => (
                <p key={index} className={index === lines.length - 1 ? "text-slate-400 text-sm" : "text-slate-300"}>{line}</p>
            ))}
        </div>
    </div>
);

const Contact = () => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "✅ Pesan Terkirim!",
            description: "Thanks udah reach out! Tim kami bakal segera bales.",
            className: 'bg-green-500/20 border-green-500 text-white',
        });
        e.target.reset();
    };

    return (
        <section className="px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                        Ngobrol <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Yuk!</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Ada pertanyaan? Atau mau curhat soal keamanan digital? Langsung aja kontak kami.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 glass-card rounded-3xl p-8">
                            <Input
                                type="text"
                                placeholder="Nama Lo"
                                required
                                className="bg-slate-800/50 border-slate-700 placeholder:text-slate-500 text-white focus:ring-cyan-500 rounded-xl py-6"
                            />
                            <Input
                                type="email"
                                placeholder="Email Lo"
                                required
                                className="bg-slate-800/50 border-slate-700 placeholder:text-slate-500 text-white focus:ring-cyan-500 rounded-xl py-6"
                            />
                            <Textarea
                                placeholder="Pesan Lo di sini..."
                                required
                                rows={5}
                                className="bg-slate-800/50 border-slate-700 placeholder:text-slate-500 text-white focus:ring-cyan-500 rounded-xl"
                            />
                            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-500/20 hover:scale-105 transition-transform btn-shine text-lg py-6">
                                Kirim Pesan
                                <Send className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <ContactInfoItem 
                            icon={Mail} 
                            title="Email" 
                            lines={['cybershield@darmajaya.ac.id', 'Dibalas kurang dari 24 jam']}
                            color="from-fuchsia-500 to-pink-500"
                        />
                         <ContactInfoItem 
                            icon={Phone} 
                            title="Telepon" 
                            lines={['+62 851-7162-9129', 'Senin - Jumat, jam 9-5 sore']}
                            color="from-cyan-500 to-blue-500"
                        />
                         <ContactInfoItem 
                            icon={MapPin} 
                            title="Basecamp" 
                            lines={['Institut Informatika dan Bisnis Darmajaya', 'Jl. ZA. Pagar Alam No.93, Bandar Lampung']}
                            color="from-purple-500 to-indigo-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Contact);