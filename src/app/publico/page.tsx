'use client'
import { motion } from "framer-motion"
import { slideIn } from "@/utils/motion"
import { SectionWrapperComponent } from "@/hoc"
import { BoxText } from '@/components/ui/boxText'
import { Layout } from "@/components/ui"
import Calendar from '@/components/page/Calendar'
import PublicActivities from '@/components/page/PublicActivities'
import TitlePage from "@/components/ui/TitlePage"
import Image from "next/image"
import PhotoSlider from "@/components/ui/PhotoSlider"


const PublicService = () => {
    
    return (
        <Layout>
            <div className="mt-[120px]">
                <TitlePage title='Atendimento ao Público' />

                <Calendar />

                {/* <div className={`bg-obs-sara max-w-2xl mx-auto mt-10 h-[600px] bg-cover bg-no-repeat  bg-center `}
            ></div> */}
                <div className={`bg-banner-stars  block w-full mt-10 sm:h-[200px] h-[100px] bg-cover bg-no-repeat sm:bg-fixed bg-center `}
            ></div>
                <PublicActivities />
                <div className={`bg-banner-stars  block w-full mt-10 sm:h-[200px] h-[100px] bg-cover bg-no-repeat sm:bg-fixed bg-center `}
            ></div>
                <SectionWrapperComponent >
                    <BoxText.Root>
                        <BoxText.TitleBox>
                            <BoxText.Subtitle text="Saíba Mais" />
                            <BoxText.Title text="Sobre o Agendamento" />
                        </BoxText.TitleBox>
                        <BoxText.Paragraph>
                            O C.E.U. (Centro de Estudos do Universo) possui a capacidade máxima de 120 pessoas
                            por sessão de atendimento ao público.
                            <br />
                            O agendamento da sua visita é obrigatório, pois sem ele, nada garante que poderemos 
                            receber você aqui, o voucher é sua garantia de que seu lugar e de sua familia estarão guardados esperando vocês.
                            <br />
                            Você pode agendar sua visita, pelo nosso WhatsApp, pelo instagram ou ainda Ligando no nosso Telefone.
                        </BoxText.Paragraph>
                        <div className="mt-10">
                            <PhotoSlider images={[
                                "/images/atendimentoPublico/obs-sara.jpg",
                                "/images/atendimentoPublico/publico-1.jpg",
                                "/images/atendimentoPublico/publico-2.jpg",
                                "/images/atendimentoPublico/publico-3.jpg",
                                "/images/atendimentoPublico/publico-4.jpg",
                                "/images/atendimentoPublico/publico-5.jpg",
                                "/images/atendimentoPublico/publico-6.jpg",
                                "/images/atendimentoPublico/publico-7.jpg",
                                "/images/atendimentoPublico/publico-8.jpg",
                                "/images/atendimentoPublico/publico-9.jpg",
                                "/images/atendimentoPublico/publico-10.jpg",
                                "/images/atendimentoPublico/publico-11.jpg",
                            ]} />
                        </div>
                        <div className="mt-10">
                        <BoxText.TitleBox>
                            <BoxText.Title text="Ingressos" />
                        </BoxText.TitleBox>
                        <BoxText.Paragraph>
                            O C.E.U. (Centro de Estudos do Universo) é uma instituição privada, mantida pelos
                            colégios e por vocês. visitantes da Terra.
                            <br />
                            <br />
                            <b>Entrada inteira.........R$ 70,00</b>
                            <br />
                            <b>Meia Entrada............R$ 35,00</b>
                            <br />
                            <br />
                            A meia entrada é ofertada a estudantes, professores e melhor idade sob apresentação de comprovante.
                            <br />
                            Crianças de até 4 anos têm gratuidade no ingresso.
                            <br />
                            O pagamento deve ser feito com cartão no momento do check-in em nossa bilheteria.
                        </BoxText.Paragraph>
                        </div>
                    </BoxText.Root>
                </SectionWrapperComponent>

                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className='bg-black-200 p-10 rounded-3xl md:mx-32 mx-4 my-36 w-auto'
                >
                    <p className="text-white font-black text-[48px]">&quot;</p>

                    <div className="mt-1">
                        <p
                            className='text-white tracking-wider text-[18px]'
                        >A imaginação muitas vezes nos leva a mundos que nunca sequer existiram. Mas sem ela não vamos a lugar algum.</p>
                        <div className="mt-7 flex justify-between items-center gap-1">
                            <div className="flex-1 flex flex-col">
                                <p className='text-white font-medium text-[16px]'>
                                    <span className='blue-text-gradient'>@</span> Carl Sagan
                                </p>
                                <p className='mt-1 text-secondary text-[12px]'>Cientista planetário e astrônomo</p>
                            </div>

                            <Image
                                src={'https://cdn.britannica.com/36/194736-050-CA5BE18B/Carl-Sagan-science-writer-American.jpg'}
                                alt={`by-Carl-Sagan`}
                                width={32}
                                height={32}
                                className='w-32 h-32 rounded-full object-cover'
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Layout>
    )
}

export default PublicService