'use client'
import { motion } from 'framer-motion'
import { fadeIn } from "@/utils/motion"
import { SectionWrapperComponent } from "@/hoc"
import { Layout } from '@/components/ui'
import { BoxText } from '@/components/ui/boxText'


const Corporate = () => {
    return <Layout>
        <div className="mt-[120px]">
            <motion.div>
                <h1
                    className={`text-logo-yel font-black md:text-[70px] mb-20
                 sm:text-[60px] xs:text-[45px] text-[35px] w-full text-center`}
                >
                    Eventos Corporativos
                </h1>
            </motion.div>
            <div className={`bg-coporate-img1 w-full h-[200px] bg-cover bg-no-repeat sm:bg-fixed bg-center`}
            ></div>
            <hr className="max-w-[300px] mx-auto mt-5" />
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-white text-[22px] max-w-3xl leading-[30px] text-center mx-auto p-3 "
            >
                Com um amplo espaço, o C.E.U. (Centro de Estudos do Universo) também fornece sua estrutura para a realização de eventos,
                como palestras, briefings e reuniões empresariais. Além da estrutura, também é oferecido suporte
                logístico e técnico para garantir que tudo saia como planejado no seu evento.
            </motion.p>
            <hr className="max-w-[300px] mx-auto mb-5" />

            <div className={`bg-coporate-img1 sm:block hidden w-full h-[200px] bg-cover bg-no-repeat sm:bg-fixed bg-center `}
            ></div>


            <SectionWrapperComponent idName='aquario-empresa'>
                <BoxText.Root>
                    <BoxText.TitleBox>
                        <BoxText.Subtitle text="Ideal para reuniões e dinâmicas de equipe" />
                        <BoxText.Title text="Aquário (Sala Marte)" />
                    </BoxText.TitleBox>
                    <BoxText.Paragraph>
                        A Sala Marte, salão do C.E.U. (Centro de Estudos do Universo) conhecido como “Aquário”,
                        ocupa um espaço bastante amplo, com lotação podendo chegar a 100 pessoas,
                        dependendo da configuração requisitada pela realização do evento.
                        <br />
                        A sala é ideal para a realização de reuniões e atividades como dinâmicas de equipe.
                        <br />
                        Conta também com um completo aparato de multimídia, possibilitando
                        apresentações de slides, exibição de vídeos e afins.
                    </BoxText.Paragraph>
                    <BoxText.Button
                        link='/tour?room=4'
                        text='Conheça o Aquário'
                    >
                        <BoxText.IconRight />
                    </BoxText.Button>
                </BoxText.Root>
            </SectionWrapperComponent>
            <div className={`bg-coporate-img2 w-full h-[200px] bg-cover bg-no-repeat sm:bg-fixed bg-center `}
            ></div>
            <SectionWrapperComponent idName='auditorio-empresa'>
                <BoxText.Root>
                    <BoxText.TitleBox>
                        <BoxText.Subtitle text="Ideal para palestras." />
                        <BoxText.Title text="Auditório" />
                    </BoxText.TitleBox>
                    <BoxText.Paragraph>
                        Nosso Auditório Multimídia oferece a possibilidade de realizar palestras em um ambiente propício,
                        com conforto e estrutura adequada para o bom desempenho do palestrante e compreensão dos espectadores.
                        <br />
                        Com capacidade para comportar até 130 pessoas e aparato de multimídia completo,
                        é o melhor espaço para atividades unidirecionais e que envolvam pouca movimentação.
                    </BoxText.Paragraph>
                    <BoxText.Button
                        link='/tour?room=5'
                        text='Conheça o Auditório'
                    >
                        <BoxText.IconRight />
                    </BoxText.Button>
                </BoxText.Root>
            </SectionWrapperComponent>
            <div className={`bg-coporate-img3 w-full h-[200px] bg-cover bg-no-repeat sm:bg-fixed bg-center `}
            ></div>
        </div>
    </Layout>
}

export default Corporate