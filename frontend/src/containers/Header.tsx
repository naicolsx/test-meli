import { Search } from "lucide-react";
import '../styles/header.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HeaderComponent from "../components/Header";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/items?search=${query}`);
    }
  };

  return (
    <HeaderComponent query={query} setQuery={setQuery} onSubmit={onSubmit} />
  );
}
