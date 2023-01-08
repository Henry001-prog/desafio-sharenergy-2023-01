import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import {
  Scroll,
  FormRow,
  TextInput,
  ViewLoading,
  Loading,
  ViewButton,
  Button,
  Text,
  YupText,
} from "./styles";

import { useRecoilState, useResetRecoilState } from "recoil";
import {
  isLoading,
  setFormAtom,
  saveClient,
  IClientForm,
  clear,
} from "../../store/clientFormRecoil";
import { IClient } from "../../interfaces/ClientType";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { searchClient } from "../../store/clientRecoil";

const schema = Yup.object()
  .shape({
    cpf: Yup.string()
      .required("Informe o CPF")
      .matches(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        "O CPF deve seguir este formato 000.000.000-00"
      ),
    name: Yup.string()
      .required("Informe o nome")
      .matches(/[A-Za-z]/, "O nome deve conter somente caracteres")
      .max(40, "Deve ter no máximo 40 caracteres"),
    birthDate: Yup.string()
      .required("Informe a data de nascimento")
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        "A data deve conter dia, mês e ano, neste formato dd/mm/yyyy"
      ),
    gender: Yup.string().required("Informe o gênero"),
    address: Yup.string()
      .required("Informe o endereço")
      .matches(
        /[!@$%^&*(),?":{}|<>]/,
        "O endereço deve ter o nome da rua e uma vígula seguida do número da casa"
      )
      .max(38, "Deve ter no máximo 38 caracteres"),
    state: Yup.string()
      .required("Informe o estado")
      .matches(/[A-Za-z]/, "O nome do estado deve conter somente caracteres")
      .max(32, "Deve ter no máximo 32 caracteres"),
    city: Yup.string()
      .required("Informe a cidade")
      .matches(/[A-Za-z]/, "O nome da cidade deve conter somente caracteres")
      .max(38, "Deve ter no máximo 38 caracteres"),
  })
  .required();

export default function ClientFormpage() {
  const [loading, setLoading] = useRecoilState<boolean>(isLoading);
  const [clearState, setClearState] = useRecoilState<boolean>(clear);
  const [clientForm, setClientForm] = useRecoilState<IClientForm>(setFormAtom);

  const { state } = useLocation();
  // const { id, color } = state;

  const navigation = useNavigate();
  const navigate = useNavigate();
  const resetForm = useResetRecoilState(setFormAtom);
  const resetClient = useResetRecoilState(searchClient);
  // const isFocused = useIsFocused();

  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);
  const input4Ref = useRef<HTMLInputElement>(null);
  const input5Ref = useRef<HTMLInputElement>(null);
  const input6Ref = useRef<HTMLInputElement>(null);
  const input7Ref = useRef<HTMLInputElement>(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      cpf: clientForm.cpf,
      name: clientForm.name,
      birthDate: clientForm.birthDate,
      gender: clientForm.gender,
      address: clientForm.address,
      state: clientForm.state,
      city: clientForm.city,
    },
  });

  useEffect(() => {
    setClearState(false);
    const { client } = state;
    if (client && client) {
      const clientToEdit = client;
      setClientForm(clientToEdit);
    } else {
      let defaults = {
        cpf: clientForm.cpf,
        name: clientForm.name,
        birthDate: clientForm.birthDate,
        gender: clientForm.gender,
        address: clientForm.address,
        state: clientForm.state,
        city: clientForm.city,
      };
      reset(defaults);
      resetForm();
    }
  }, [state]);

  useEffect(() => {
    reset(clientForm);
  }, [clientForm]);

  return (
    <Scroll>
      {clientForm && (
        <>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("cpf")}
                  placeholder="Digite o CPF"
                  // placeholderTextColor={errors.cpf ? "#fff" : "#808080"}
                  value={value}
                  onChange={onChange}
                  error={errors.cpf ? true : false}
                  onSubmit={() => input2Ref.current!.focus()}
                />
                <YupText>{errors.cpf?.message}</YupText>
              </FormRow>
            )}
            name="cpf"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("name")}
                  placeholder="Digite o nome"
                  // placeholderTextColor={errors.name ? "#fff" : "#808080"}
                  ref={input2Ref}
                  value={value}
                  onChange={onChange}
                  error={errors.name ? true : false}
                  onSubmit={() => input3Ref.current!.focus()}
                />
                <YupText>{errors.name?.message}</YupText>
              </FormRow>
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("birthDate")}
                  placeholder="Data de nascimento"
                  // placeholderTextColor={errors.birthDate ? "#fff" : "#808080"}
                  ref={input3Ref}
                  value={value}
                  onChange={onChange}
                  error={errors.birthDate ? true : false}
                  onSubmit={() => input4Ref.current!.focus()}
                />
                <YupText>{errors.birthDate?.message}</YupText>
              </FormRow>
            )}
            name="birthDate"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("gender")}
                  placeholder="Digite o gênero"
                  // placeholderTextColor={errors.gender ? "#fff" : "#808080"}
                  ref={input4Ref}
                  value={value}
                  onChange={onChange}
                  error={errors.gender ? true : false}
                  onSubmit={() => input5Ref.current!.focus()}
                />
                <YupText>{errors.gender?.message}</YupText>
              </FormRow>
            )}
            name="gender"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("address")}
                  placeholder="Digite o endereço"
                  // placeholderTextColor={errors.address ? "#fff" : "#808080"}
                  ref={input5Ref}
                  value={value}
                  onChange={onChange}
                  error={errors.address ? true : false}
                  onSubmit={() => input6Ref.current!.focus()}
                />
                <YupText>{errors.address?.message}</YupText>
              </FormRow>
            )}
            name="address"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("state")}
                  placeholder="Digite o Estado"
                  // placeholderTextColor={errors.state ? "#fff" : "#808080"}
                  ref={input6Ref}
                  value={value}
                  onChange={onChange}
                  error={errors.state ? true : false}
                  onSubmit={() => input7Ref.current!.focus()}
                />
                <YupText>{errors.state?.message}</YupText>
              </FormRow>
            )}
            name="state"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormRow>
                <TextInput
                  {...register("city")}
                  placeholder="Digite a cidade"
                  // placeholderTextColor={errors.city ? "#fff" : "#808080"}
                  ref={input7Ref}
                  value={value}
                  onChange={onChange}
                  error={errors.city ? true : false}
                />
                {<YupText>{errors.city?.message}</YupText>}
              </FormRow>
            )}
            name="city"
          />
        </>
      )}

      {loading ? (
        <ViewLoading>
          <Loading />
        </ViewLoading>
      ) : (
        <ViewButton>
          <Button
            onClick={handleSubmit(async (data) => {
              setLoading(true);
              try {
                await saveClient(data, setLoading);
                resetForm();
                setClearState(true);
                resetClient();
                navigate("/clientslist");
              } catch (error: any) {
                toast.error(`Erro: ${error}`, {
                  position: "top-right",
                  autoClose: 7000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              } finally {
                setLoading(false);
              }
            })}
          >
            <Text>Salvar</Text>
          </Button>
        </ViewButton>
      )}
    </Scroll>
  );
}
