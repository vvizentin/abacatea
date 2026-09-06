import { useState } from 'react';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { specialties } from '../../data/specialties';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    specialty: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validação de Nome (obrigatório)
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    // Validação de E-mail (obrigatório e formato)
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu endereço de e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Por favor, informe um endereço de e-mail válido.';
    }

    // Validação de Telefone (obrigatório)
    const rawPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, informe seu telefone com DDD.';
    } else if (rawPhone.length < 10) {
      newErrors.phone = 'Por favor, informe um telefone válido com DDD (mínimo 10 dígitos).';
    }

    // Validação de Mensagem (obrigatório)
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, escreva uma mensagem detalhando o motivo do contato.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpa o erro do campo alterado quando o usuário digita
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulação local de envio para ambiente acadêmico sem backend externo
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        specialty: '',
        message: '',
      });
      setErrors({});
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contato" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact-title"
          tag="Fale Conosco"
          title="Estamos aqui para acolher sua família"
          subtitle="Tire suas dúvidas, conheça nossa estrutura ou solicite o agendamento de uma primeira conversa."
        />

        <div className="contact-layout">
          {/* Informações Institucionais de Contato */}
          <aside className="contact-info-panel card" aria-label="Informações de Contato">
            <h3 className="contact-info-title">Canais de Atendimento</h3>
            <p className="contact-info-description">
              Nossa equipe está disponível para orientar você com carinho, atenção e clareza.
            </p>

            <ul className="contact-details-list">
              <li className="contact-detail-item">
                <span className="contact-detail-icon" aria-hidden="true">📍</span>
                <div>
                  <strong>Endereço</strong>
                  <p>Rua Exemplo, 123 — Curitiba, PR</p>
                </div>
              </li>

              <li className="contact-detail-item">
                <span className="contact-detail-icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>(41) 99999-9999</p>
                </div>
              </li>

              <li className="contact-detail-item">
                <span className="contact-detail-icon" aria-hidden="true">✉️</span>
                <div>
                  <strong>E-mail</strong>
                  <p>contato@abacatea.com.br</p>
                </div>
              </li>

              <li className="contact-detail-item">
                <span className="contact-detail-icon" aria-hidden="true">🕒</span>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <p>Segunda a sexta — 08:00 às 18:00</p>
                </div>
              </li>
            </ul>

            <div className="contact-academic-badge">
              <span>Projeto Acadêmico Demonstrativo</span>
              <p>Os canais acima são fictícios e utilizados exclusivamente para simulação.</p>
            </div>
          </aside>

          {/* Formulário de Contato / Feedback */}
          <div className="contact-form-panel card">
            {isSubmitted ? (
              <div className="form-success-container" role="status" aria-live="polite">
                <div className="success-icon-badge" aria-hidden="true">
                  ✓
                </div>
                <h3 className="success-title">Mensagem enviada com sucesso!</h3>
                <p className="success-message">
                  Agradecemos o seu contato. Em um ambiente de produção real, nossa equipe de acolhimento retornaria em até 24 horas úteis.
                </p>
                <p className="success-academic-note">
                  <em>Simulação concluída: nenhum dado pessoal foi enviado para servidores externos.</em>
                </p>
                <button
                  type="button"
                  className="btn btn-primary success-btn"
                  onClick={handleReset}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulário de Contato da Clínica ABAcaTEA"
              >
                <div className="form-grid">
                  {/* Nome Completo */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Nome completo <span className="required-asterisk" aria-hidden="true">*</span>
                      <span className="sr-only">(campo obrigatório)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      placeholder="Ex.: Maria da Silva"
                    />
                    {errors.name && (
                      <span id="contact-name-error" className="form-error-text" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* E-mail */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      E-mail <span className="required-asterisk" aria-hidden="true">*</span>
                      <span className="sr-only">(campo obrigatório)</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      placeholder="Ex.: maria@exemplo.com.br"
                    />
                    {errors.email && (
                      <span id="contact-email-error" className="form-error-text" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Telefone */}
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      Telefone com DDD <span className="required-asterisk" aria-hidden="true">*</span>
                      <span className="sr-only">(campo obrigatório)</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      value={formData.phone}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      placeholder="Ex.: (41) 99999-9999"
                    />
                    {errors.phone && (
                      <span id="contact-phone-error" className="form-error-text" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Nome da Criança (Opcional) */}
                  <div className="form-group">
                    <label htmlFor="contact-child-name" className="form-label">
                      Nome da criança <span className="optional-tag">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-child-name"
                      name="childName"
                      className="form-input"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder="Ex.: Pedro"
                    />
                  </div>

                  {/* Especialidade de Interesse (Opcional) */}
                  <div className="form-group form-group-full">
                    <label htmlFor="contact-specialty" className="form-label">
                      Especialidade de interesse <span className="optional-tag">(opcional)</span>
                    </label>
                    <select
                      id="contact-specialty"
                      name="specialty"
                      className="form-select"
                      value={formData.specialty}
                      onChange={handleChange}
                    >
                      <option value="">Selecione uma especialidade (ou avaliação inicial geral)</option>
                      {specialties.map((spec) => (
                        <option key={spec.id} value={spec.title}>
                          {spec.title}
                        </option>
                      ))}
                      <option value="outra">Outra / Não tenho certeza</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="form-group form-group-full">
                    <label htmlFor="contact-message" className="form-label">
                      Mensagem <span className="required-asterisk" aria-hidden="true">*</span>
                      <span className="sr-only">(campo obrigatório)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Conte-nos como podemos ajudar sua criança..."
                    />
                    {errors.message && (
                      <span id="contact-message-error" className="form-error-text" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
