import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginView from './views/LoginView';
import RoleSelectionView from './views/RoleSelectionView';
import PsychologistChoiceView from './views/PsychologistChoiceView';
import AdminMasterView from './views/AdminMasterView';
import InternAgendaView from './views/InternAgendaView';
import DashboardAdminView from './views/DashboardAdminView';
import DashboardStaffView from './views/DashboardStaffView';
import PatientCaseView from './views/PatientCaseView';
import GroupFormationView from './views/GroupFormationView';
import PatientRegistrationView from './views/PatientRegistrationView';
import FeedbackSurveyView from './views/FeedbackSurveyView';
import PatientPortalView from './views/PatientPortalView';
import SupervisorGroupView from './views/SupervisorGroupView';
import PsychologistTechnicalDashboard from './views/PsychologistTechnicalDashboard';
import InternDashboardView from './views/InternDashboardView';
import ProjectCreditsView from './views/ProjectCreditsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelectionView />} />
        <Route path="/login/tradicional" element={<LoginView />} />
        <Route path="/psicologo/opcoes" element={<PsychologistChoiceView />} />
        <Route path="/psicologo/painel" element={<PsychologistTechnicalDashboard />} />
        <Route path="/intern/dashboard" element={<InternDashboardView />} />
        <Route path="/admin/creditos" element={<ProjectCreditsView />} />
        <Route path="/admin/master" element={<AdminMasterView />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardAdminView />} />
          <Route path="/staff" element={<DashboardStaffView />} />
          <Route path="/pacientes/registro" element={<PatientRegistrationView />} />
          <Route path="/pacientes/caso" element={<PatientCaseView />} />
          <Route path="/fila" element={<DashboardStaffView />} />
          <Route path="/equipe" element={<SupervisorGroupView />} />
          <Route path="/supervisor/grupos" element={<SupervisorGroupView />} />
          <Route path="/feedback" element={<FeedbackSurveyView />} />
          <Route path="/portal" element={<PatientPortalView />} />
          <Route path="/estagiario/agenda" element={<InternAgendaView />} />
          <Route path="/pacientes" element={<Navigate to="/pacientes/registro" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
