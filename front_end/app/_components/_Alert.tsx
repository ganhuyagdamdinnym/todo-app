import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useStatus } from "../_contexts/StatusContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useUserTodo } from "../_contexts/UserTodoContext";
import { useDeleteTodoMutation } from "../generated";
type TodoType = {
  title: string;
  id: string;
  RemoveTodo: (title: string) => void;
};
export function AlertDialogDemo(props: TodoType) {
  const { title, RemoveTodo, id } = props;
  const { inprogressStatus, setInprogressStatus } = useStatus();
  const { refetch } = useUserTodo();
  const [removeTodo, {}] = useDeleteTodoMutation();
  const HandleMoveToTrash = async () => {
    const deleteTodoInput = {
      id: id,
    };
    try {
      await removeTodo({ variables: { input: deleteTodoInput } }).then(
        (res) => {
          refetch();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={() => RemoveTodo(id)} variant="outline">
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {inprogressStatus
              ? `Are you sure you want to delete "${title}"?`
              : `Are you sure you want to delete "${title}" from trash?`}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {/* This action cannot be undone. This will permanently delete your
            account and remove your data from our servers. */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={HandleMoveToTrash}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
